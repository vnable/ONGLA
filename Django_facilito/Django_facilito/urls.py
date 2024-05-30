from django.contrib import admin
from django.urls import path
from djangoapp_facil.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('cart', cart, name="cart"),
    path('name', login, name="login"),
    path('login2', login2, name="login2"),
    path('shipping', shipping, name="shipping"),
    path('sucursales', sucursales, name="sucursales"),
]
