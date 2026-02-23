from django.shortcuts import render
from .models import Book

def book_list(request):
    books = Book.objects.select_related("author", "genre").order_by("-created_at")
    return render(request, "archive/book_list.html", {"books": books})