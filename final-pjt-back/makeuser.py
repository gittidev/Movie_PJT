import json
from django.contrib.auth.hashers import make_password

users = []

password_hash = make_password("password123")

for i in range(1, 51):
    user = {
        "model": "auth.user",
        "pk": i,
        "fields": {
            "username": f"user{i}",
            "password": password_hash,
            "email": f"user{i}@example.com",
            "first_name": "User",
            "last_name": f"{i}"
        }
    }
    users.append(user)

with open("fixtures/test_users.json", "w") as f:
    json.dump(users, f, indent=4)
