from celery import shared_task


@shared_task
def debug_task_two(self):
    print('Request: {0!r}'.format(self.request))
