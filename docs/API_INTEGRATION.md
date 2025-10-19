# API Integration Guide

## Overview

This document provides guidance for integrating ZOA.fun with backend APIs. Currently, the frontend is ready to accept API integrations.

## Environment Setup

### Development

Add to `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

### Production

Add to `.env.production`:

```env
NEXT_PUBLIC_API_URL=https://api.zoa.fun
NEXT_PUBLIC_WS_URL=wss://api.zoa.fun
API_SECRET_KEY=your-secret-key
```

## Planned Endpoints

### Authentication

```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/verify-email
POST /api/auth/logout
GET  /api/auth/me
```

### Waitlist

```
POST /api/waitlist/subscribe
GET  /api/waitlist/status/{email}
POST /api/waitlist/verify
```

### Tokens

```
GET  /api/tokens
GET  /api/tokens/{id}
POST /api/tokens
PUT  /api/tokens/{id}
DELETE /api/tokens/{id}
```

### User

```
GET  /api/users/{id}
PUT  /api/users/{id}
GET  /api/users/{id}/tokens
GET  /api/users/{id}/portfolio
```

### Analytics

```
GET  /api/analytics/overview
GET  /api/analytics/tokens
GET  /api/analytics/users
GET  /api/analytics/transactions
```

## Integration Steps

### 1. Email Waitlist (v0.2)

**File**: `src/app/page.tsx`

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/waitlist/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      setSubmitted(true);
      setEmail('');
    }
  } catch (error) {
    console.error('Subscription failed:', error);
  }
};
```

### 2. Authentication (v0.5)

**Create**: `src/lib/auth.ts`

```typescript
export async function login(email: string, password: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  
  if (!response.ok) throw new Error('Login failed');
  return response.json();
}
```

### 3. Web3 Integration (v0.6)

**Create**: `src/lib/web3.ts`

```typescript
import { ethers } from 'ethers';

export async function connectWallet() {
  if (!window.ethereum) throw new Error('No wallet found');
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  
  return signer;
}
```

## API Response Format

### Success Response

```json
{
  "success": true,
  "data": {
    "id": "123",
    "email": "user@example.com",
    "createdAt": "2025-10-19T00:00:00Z"
  },
  "message": "Operation successful"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      {
        "field": "email",
        "message": "Must be valid email"
      }
    ]
  }
}
```

## Error Handling

```typescript
const handleApiError = (error: unknown) => {
  if (error instanceof Error) {
    console.error('API Error:', error.message);
  }
  // Show user-friendly error message
};
```

## Rate Limiting

- General API: 100 requests/minute
- Authentication: 10 requests/minute
- Email: 5 requests/minute

## Security

- Always use HTTPS
- Include API key in headers for server-to-server calls
- Never expose API keys in client-side code
- Validate all inputs
- Use CORS properly

## Testing

### Mock API for Development

```typescript
// src/lib/mockApi.ts
export const mockWaitlist = (email: string) => {
  return {
    success: true,
    data: { email, joinedAt: new Date() },
  };
};
```

## Monitoring

- Track API response times
- Monitor error rates
- Log failed requests
- Alert on service outages

---

For more details, see [Backend Documentation](./BACKEND.md)
