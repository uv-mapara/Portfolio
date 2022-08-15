from django.shortcuts import render
from .models import home

def home(request):
    if request.method=='POST':
        obj=home()
        obj.firstname= request.POST['firstname']
        obj.lastname= request.POST['lastname']
        obj.email= request.POST['email']
        obj.message= request.POST['message'] 
        obj.save()                               
    return render(request,'index.html')

