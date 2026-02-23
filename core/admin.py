from django.contrib import admin
from django.utils.html import format_html
from .models import Book, Author, Genre


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "genre", "release_year", "created_at", "cover_preview")
    search_fields = ("title", "author__name")
    list_filter = ("genre", "release_year")

    def cover_preview(self, obj):
        if obj.cover_image:
            return format_html('<img src="{}" style="height:50px; width:auto;" />', obj.cover_image.url)
        return "—"
    cover_preview.short_description = "Cover"


admin.site.register(Author)
admin.site.register(Genre)