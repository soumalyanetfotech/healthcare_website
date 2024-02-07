
from django.urls import include, path
from django.contrib import admin
from .views import handle_payment_success , start_payment

urlpatterns = [
    path('pay/', start_payment, name="payment"),
    path('payment/success/', handle_payment_success, name="payment_success")
]