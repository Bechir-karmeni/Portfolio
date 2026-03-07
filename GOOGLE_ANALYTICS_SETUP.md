# Google Analytics Setup Guide

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Start measuring**
3. Enter a property name (e.g., "My Portfolio")
4. Select your reporting timezone and currency
5. Fill in business details as needed
6. Accept the data processing terms

## Step 2: Create a GA4 Property

1. Go to **Admin** (bottom left)
2. Create a new **Property**
3. Enter property name (e.g., "bechir-portfolio")
4. Select timezone and currency
5. Click **Create property**

## Step 3: Get Your Measurement ID

1. In the **Admin panel**, select your property
2. Click **Data Streams**
3. Select your **Web** stream
4. Copy the **Measurement ID** (looks like: `G_XXXXXXXXXXXXX`)

## Step 4: Add Measurement ID to Your Project

### Local Development:

1. Open `.env.local` file in your project root
2. Replace `G_XXXXXXXXXXXXX` with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_ID=G_XXXXXXXXXXXX
   ```
3. Save the file

### For Netlify Deployment:

1. Go to your Netlify site settings
2. Navigate to **Site settings** → **Environment variables**
3. Add a new variable:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** Your Measurement ID
4. Redeploy your site

## Step 5: Verify Installation

1. Your dev server will automatically reload
2. Go to your website
3. In Google Analytics, go to **Real time** → **Overview**
4. You should see your session appear within seconds

## What You Can Track

### Automatic Tracking:

- ✅ Page views
- ✅ User location
- ✅ Device type (mobile/desktop)
- ✅ Browser type
- ✅ User sessions
- ✅ Session duration
- ✅ Traffic source (direct, referral, organic search)

### Custom Event Tracking:

Use the `useAnalytics` hook to track custom events:

```tsx
'use client';

import { useAnalytics } from '@/hooks/use-analytics';

export default function YourComponent() {
  const { trackEvent } = useAnalytics();

  const handleDownload = () => {
    trackEvent('download_resume', {
      file_name: 'resume.pdf',
      file_size: '2mb'
    });
    // ... download logic
  };

  const handleProjectClick = (projectName: string) => {
    trackEvent('project_clicked', {
      project_name: projectName
    });
  };

  return (
    // Your JSX
  );
}
```

## Example Events to Track

```tsx
// Certificate download
trackEvent("certificate_download", {
  certificate_name: "AWS Solutions Architect",
  date: new Date().toISOString(),
});

// Project click
trackEvent("project_view", {
  project_name: "AI Portfolio System",
  category: "AI/ML",
});

// Award category view
trackEvent("award_category_view", {
  category_name: "hackathons",
});

// Contact form submission
trackEvent("contact_form_submit", {
  form_section: "contact",
});

// Social link click
trackEvent("social_link_click", {
  platform: "linkedin" | "github" | "twitter",
});
```

## View Your Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View reports:
   - **Dashboard**: Overview of your traffic
   - **Real-time**: Live visitor activity
   - **Users**: User demographics and behavior
   - **Acquisition**: Where your traffic comes from
   - **Engagement**: Which pages are popular
   - **Events**: Custom events you're tracking

## Troubleshooting

### Analytics not showing data?

- Check that the Measurement ID is correct
- Verify `NEXT_PUBLIC_GA_ID` is set in environment variables
- Check browser console for errors
- Wait a few minutes for data to appear in Google Analytics

### Using different tracking IDs for dev/prod?

Create separate GA properties and use environment-specific IDs

## After Deployment to Netlify

1. Deploy your site to Netlify
2. Make sure the `NEXT_PUBLIC_GA_ID` environment variable is set
3. Trigger a redeployment if the environment variable was added after initial deploy
4. Wait 24-48 hours for Google Analytics to process and display all data

---

**Important:** The `NEXT_PUBLIC_` prefix is required so the Measurement ID is available in the browser. This is safe - it's meant to be public.
