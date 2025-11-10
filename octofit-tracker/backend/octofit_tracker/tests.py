from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class BasicModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Marvel')
        self.assertEqual(str(team), 'Marvel')

    def test_user_creation(self):
        team = Team.objects.create(name='DC')
        user = User.objects.create(name='Clark Kent', email='clark@dc.com', team=team)
        self.assertEqual(str(user), 'Clark Kent')

    def test_activity_creation(self):
        team = Team.objects.create(name='Marvel')
        user = User.objects.create(name='Peter Parker', email='peter@marvel.com', team=team)
        activity = Activity.objects.create(user=user, type='Running', duration=30, date='2025-11-10')
        self.assertEqual(activity.type, 'Running')

    def test_workout_creation(self):
        team = Team.objects.create(name='Marvel')
        workout = Workout.objects.create(name='Cardio', description='Intense cardio')
        workout.suggested_for.add(team)
        self.assertIn(team, workout.suggested_for.all())

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Marvel')
        leaderboard = Leaderboard.objects.create(team=team, points=100)
        self.assertEqual(leaderboard.points, 100)
