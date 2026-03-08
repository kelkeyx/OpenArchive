from django.core.management.base import BaseCommand
from core.models import Book


class Command(BaseCommand):
    help = "Duplicate existing books for UI testing"

    def add_arguments(self, parser):
        parser.add_argument(
            "--times",
            type=int,
            default=3,
            help="How many duplicates to create per book"
        )

    def handle(self, *args, **options):
        times = options["times"]
        books = Book.objects.all()

        if not books.exists():
            self.stdout.write(self.style.WARNING("No books found to duplicate."))
            return

        created_count = 0

        for book in books:
            for i in range(times):
                Book.objects.create(
                    title=f"{book.title} Copy {i + 1}",
                    description=book.description,
                    author=book.author,
                    genre=book.genre,
                    release_year=book.release_year,
                    cover_image=book.cover_image,
                )
                created_count += 1

        self.stdout.write(
            self.style.SUCCESS(f"Created {created_count} duplicated books.")
        )