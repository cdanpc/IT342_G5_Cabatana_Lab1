import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import authService from '../services/authService';
import type { UserResponse } from '../services/authService';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await authService.getUserProfile();
        setUserProfile(profile);
      } catch (err: any) {
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="profile-card">
        <h2>User Profile</h2>
        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">ID:</span>
            <span className="info-value">{userProfile?.id || user?.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">First Name:</span>
            <span className="info-value">{userProfile?.firstName || user?.firstName}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Last Name:</span>
            <span className="info-value">{userProfile?.lastName || user?.lastName}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email:</span>
            <span className="info-value">{userProfile?.email || user?.email}</span>
          </div>
          {userProfile?.createdAt && (
            <div className="info-row">
              <span className="info-label">Member Since:</span>
              <span className="info-value">
                {new Date(userProfile.createdAt).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
