# Generated by Django 5.0.3 on 2024-04-21 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('procrastinate', '0005_uploads_speechtotext_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='uploads',
            name='knowledge_graph_url',
            field=models.URLField(max_length=264, null=True),
        ),
    ]
