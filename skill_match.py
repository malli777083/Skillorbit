role_skills = {
    "Data Analyst": {
        "python": 2,
        "sql": 3,
        "statistics": 2,
        "excel": 2,
        "power bi": 2
    },
    "AI/ML Engineer": {
        "python": 3,
        "statistics": 2,
        "machine learning": 3,
        "sql": 1,
        "pandas": 2
    }
}

my_skills = {
    "python": 2,
    "sql": 1,
    "statistics": 1,
    "pandas": 2
}

role_name = input("Choose a role (Data Analyst / AI/ML Engineer): ").strip()

if role_name not in role_skills:
    print("Role not found. Check the role name and try again.")
else:
    required = role_skills[role_name]
    matched = []
    missing = []

    for skill, required_level in required.items():
        my_level = my_skills.get(skill, 0)

        if my_level >= required_level:
            matched.append(skill)
        else:
            missing.append(skill)

    score = round(len(matched) / len(required) * 100)

    print(f"\nRole: {role_name}")
    print(f"Skill match: {score}%")
    print("Matched skills:", ", ".join(matched) or "None")
    print("Skills to improve:", ", ".join(missing) or "None")