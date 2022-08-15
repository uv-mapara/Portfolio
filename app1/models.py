from django.db import models

# Create your models here.

class home(models.Model):
     firstname= models.CharField(max_length=200,blank = False,null = False)
     lastname= models.CharField(max_length=200,blank = False,null = False)
     email=models.EmailField(blank = False,null = False)
     message=models.CharField(max_length=50000,blank = False,null = False)

     def __str__(self):
          return self.email
