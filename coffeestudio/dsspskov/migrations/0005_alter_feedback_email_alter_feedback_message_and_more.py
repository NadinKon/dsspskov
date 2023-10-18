# Generated by Django 5.0a1 on 2023-10-18 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsspskov', '0004_alter_feedback_message_alter_feedback_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, verbose_name='Почта'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='message',
            field=models.TextField(blank=True, verbose_name='Сообщение'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Имя'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='phone',
            field=models.CharField(max_length=18, verbose_name='Телефон'),
        ),
    ]