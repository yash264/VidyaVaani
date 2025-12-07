import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
import joblib
import csv


# Import file
df=pd.read_csv("./datasets/student_performance.csv")


# Split data
X = df[['preperation_level', 'study_hours', 'sleep_hours', 'revision_frequency', 'exam_stress_level']]
y = df['performance_scores']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# Train Random Forest Model
model = RandomForestRegressor(
    n_estimators=100,
    max_depth=None,
    bootstrap=True,
    random_state=42
)
model.fit(X_train, y_train)


# Make predictions on the test set
y_pred = model.predict(X_test)


# Calculate Accuracy Metrics
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Print Accuracy Results
print(f"Mean Absolute Error (MAE): {mae:.2f}")
print(f"R² Score: {r2:.2f}")


# Save model
joblib.dump(model, 'models/randomForest.pkl')


print("Server is running")