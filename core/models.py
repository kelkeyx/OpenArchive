from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    author = models.ForeignKey("Author", on_delete=models.CASCADE, related_name="books")
    genre = models.ForeignKey("Genre", on_delete=models.SET_NULL, null=True, blank=True)
    release_year = models.PositiveIntegerField()
    cover_image = models.ImageField(upload_to="book_covers/", blank=True, null=True)  # ✅ add this
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title