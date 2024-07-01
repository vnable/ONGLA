# Django_facilito/urls.py

from django.contrib import admin
from django.urls import path
from djangoapp_facil import views
from django.contrib.auth.views import LoginView
from django.contrib.auth import views as auth_views
from djangoapp_facil.views import agregar_producto, eliminar_producto, limpiar_carrito, restar_producto, tienda

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('cart/', views.cart, name="cart"),
    path('login/', views.login, name="login"),
    path('Logindjango/', LoginView.as_view(template_name="Logindjango.html"), name="Logindjango"),
    path('login2/', views.login2, name="login2"),
    path('shipping/', views.shipping, name="shipping"),
    path('logout2/', views.logout2, name="logout2"),
    path('sucursales/', views.sucursales, name="sucursales"),
    path('logout/', auth_views.LogoutView.as_view(), name="logout"),
    path('tienda/', tienda, name="tienda"),
    path('agregar/<int:producto_id>/', agregar_producto, name="add"),
    path('eliminar/<int:producto_id>/', eliminar_producto, name="del"),
    path('restar/<int:producto_id>/', restar_producto, name="sub"),
    path('limpiar/', limpiar_carrito, name="cls"),
]