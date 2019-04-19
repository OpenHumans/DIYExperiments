from django.conf import settings
from django.contrib.auth import logout
from django.shortcuts import redirect, render
from openhumans.models import OpenHumansMember


def index(request):
    """
    Starting page for app.
    """
    if request.user.is_authenticated:
        return redirect('dashboard')

    auth_url = OpenHumansMember.get_auth_url()
    context = {'auth_url': auth_url}

    return render(request, 'main/index.html', context=context)


def dashboard(request):
    """
    Show files/status dashboard for user that has completed setup.
    """
    # More graceful failure when project is deauthed only on OH side.
    try:
        data_files = request.user.openhumansmember.list_files()
        data_files.sort(key=lambda x: x['basename'], reverse=True)
    except Exception:
        data_files = None
    context = {'data_files': data_files}
    return render(request, 'main/dashboard.html', context=context)


def about(request):
    """
    Share further details about the project.
    """
    auth_url = OpenHumansMember.get_auth_url()
    context = {'auth_url': auth_url}
    return render(request, 'main/about.html', context=context)


def logout_user(request):
    """
    Logout user.
    """
    if request.method == 'POST':
        logout(request)
    redirect_url = settings.LOGOUT_REDIRECT_URL
    return redirect(redirect_url)
