import random

#  performance database
performance_DB = {
    "poor": [
        {  
            "suggest": "Instead of aiming for perfection, focus on one subject/topic at a time.",
            "motivate": "Failure is not the opposite of success; it is part of success."
        },
        {
            "suggest": "Create a study timetable with breaks.",
            "motivate": "The expert in anything was once a beginner."
        },
        {
            "suggest": "Use mind maps, flashcards, and real-life examples to understand concepts.",
            "motivate": "Difficulties in life are intended to make us better, not bitter."
        },
        {
            "suggest": "Don’t hesitate to ask teachers, mentors, or friends for help.",
            "motivate": "Your present circumstances don’t determine where you can go; they merely determine where you start."
        },
        {
            "suggest": "Study in a quiet place and avoid phone distractions.",
            "motivate": "Success is the sum of small efforts, repeated day in and day out."
        },
        {
            "suggest": "Celebrate small wins—completed a chapter? Treat yourself!",
            "motivate": "Don’t let what you cannot do interfere with what you can do."
        },
        {
            "suggest": "Get enough sleep (7-8 hours), exercise, and eat healthy.",
            "motivate": "Believe you can, and you’re halfway there."
        },
    ],
    "average": [
        {
            "suggest": "Set a daily study schedule with short, focused study sessions.",
            "motivate": "Hard work beats talent when talent doesn’t work hard."
        },
        {
            "suggest": "Identify your weak subjects/topics and dedicate extra time to improving them.",
            "motivate": "Slow progress is still progress. Keep going!"
        },
        {
            "suggest": "Use mind maps, flashcards, and self-quizzing instead of passive reading.",
            "motivate": "The difference between ordinary and extraordinary is that little extra."
        },
        {
            "suggest": "Practicing past exam papers improves confidence and time management.",
            "motivate": "Success is the sum of small efforts, repeated day in and day out."
        },
        {
            "suggest": "Avoid social media, excessive phone use, and study in a quiet place.",
            "motivate": "Every expert was once a beginner."
        },
        {
            "suggest": "Exercise daily, sleep 7-8 hours, and eat well—your brain needs energy!",
            "motivate": "You don’t have to be great to start, but you have to start to be great."
        },
        {
            "suggest": "Ask teachers, mentors, or friends if you don’t understand something.",
            "motivate": "Mistakes are proof that you are trying."
        },
    ],
    "good": [
        {
            "suggest": "Attempt more advanced problems, set higher goals.",
            "motivate": "Excellence is not being the best; it is doing your best."
        },
        {
            "suggest": "Use the Pomodoro technique (25 min study + 5 min break) or a study planner.",
            "motivate": "Strive for progress, not perfection."
        },
        {
            "suggest": "Excellence is built on daily effort, not last-minute studying.",
            "motivate": "Your only limit is your mind. Keep pushing forward!"
        },
        {
            "suggest": "Get enough sleep, exercise, and eat well.",
            "motivate": "Do what you can, with what you have, where you are."
        },
        {
            "suggest": "Summarization, flashcards, and self-quizzing.",
            "motivate": "Don’t be afraid of failure. Be afraid of being in the same place next year as you are today."
        },
        {
            "suggest": " Teaching reinforces your own understanding.",
            "motivate": "Your speed doesn’t matter, forward is forward."
        },
        {
            "suggest": "Ask teachers/mentors where you can improve.",
            "motivate": "Success is not about being the best. It’s about being better than you were yesterday."
        },
    ],
}

def recommend_suggestion(student_type):
    suggestions = performance_DB.get(student_type.lower())
    if suggestions:
        return random.sample(suggestions, 1)  # Recommend 1 random suggestions
    return []