# Generated by Django 5.0.3 on 2024-04-19 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('procrastinate', '0004_alter_uploads_result_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='uploads',
            name='speechToText_url',
            field=models.URLField(max_length=264, null=True),
        ),
    ]
