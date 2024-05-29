from django.contrib import admin
from django.urls import path
from djangoapp_facil.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('cart', cart, name="cart"),
    path('', login, name="login"),
    path('', login2, name="login2"),
    path('shipping', shipping, name="shipping"),
    path('', sucursales, name="sucursales"),
]
