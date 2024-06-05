from django.contrib import admin
from django.urls import path
from djangoapp_facil.views import *
from django.contrib.auth.views import LoginView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('cart', cart, name="cart"),
    path('name', login, name="login"),
    path('Logindjango', LoginView.as_view(template_name="Logindjango.html"), name="Logindjango"),
    path('login2', login2, name="login2"),
    path('shipping', shipping, name="shipping"),
    path('sucursales', sucursales, name="sucursales"),
    path('logout', auth_views.LogoutView.as_view(next_page='logout.html'), name="logout"),
]
