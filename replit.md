# Omaha Auto Glass Repair Website

## Overview

This is a full-stack web application for Omaha Auto Glass Repair, a local auto glass repair business specializing in mobile rock chip repair and windshield services. The application is built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: Shadcn/ui components built on Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development**: Hot reload with Vite integration for full-stack development

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon serverless driver for PostgreSQL connections

## Key Components

### Frontend Components
- **Pages**: Home (Index), About, Services, Fleet Services, Dealership Services, Contact, Privacy Policy, Terms of Service, and 404 handling
- **Layout**: Header with navigation, Hero section, Service benefits, Quote form, and Footer
- **UI Components**: Comprehensive set of accessible components from Shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **Server**: Express.js with middleware for JSON parsing, logging, and error handling
- **Routes**: RESTful API structure with `/api` prefix
- **Storage**: Interface-based storage system with PostgreSQL database integration via DatabaseStorage
- **Development**: Vite middleware integration for hot reloading

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Type Safety**: Zod validation schemas derived from Drizzle schema definitions

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express backend
2. **Backend Processing**: Express routes handle business logic and data validation
3. **Database Operations**: Drizzle ORM manages database queries and mutations
4. **Response**: JSON responses sent back to frontend
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon database
- **drizzle-orm**: Type-safe database toolkit
- **@tanstack/react-query**: Server state management
- **express**: Web framework for Node.js
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant handling
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle Kit manages schema migrations

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built frontend
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

The application is designed for easy deployment to platforms like Replit, Vercel, or traditional hosting providers, with support for both development and production environments.

## Recent Changes (January 2025)

### Contact Information Updates
- Updated all phone numbers throughout the site to (402) 302-2284
- Changed emergency service from phone calls to text messages to avoid late-night calls
- Updated all tel: links and display text across all components

### New Pages Added
- **Contact Page**: Created comprehensive contact form with business hours, service areas, and emergency contact options
- **Privacy Policy**: Industry-standard privacy policy with auto glass business specifics
- **Terms of Service**: Legal terms covering services, payments, warranties, and liability (removed warranty and services sections per user request)

### UI/UX Improvements
- **About Page Logo**: Redesigned logo display with circular white background and teal/green opaque circle behind it
- **Footer Service Links**: Updated service listings to link to respective service pages (/services, /dealership-services, /fleet-services)
- **Services Page**: Added photo gallery section showcasing actual repair work (not logos) with before/after images
- **Header Navigation**: Updated contact link to direct to new contact page (/contact)

### Emergency Service Changes
- Changed emergency service CTA from "Call Now" to "Text Now" 
- Updated phone links to use sms: protocol instead of tel: for emergency contacts
- Added explanatory text "Text us for urgent service" to emergency banner

### Architecture Updates
- All pages now use proper routing with wouter
- Contact form uses mailto integration for message handling
- Photo gallery integrated into services page showcasing actual repair work

## Recent Changes (January 2025) - Updated

### Contact Page Updates
- Added Google Maps embed showing Omaha service area
- Removed "Get a Free Quote" section from contact page
- Changed emergency service back to phone calls instead of text messages

### Header Navigation Changes
- Updated phone number in toolbar to use SMS/text messaging (sms: protocol)
- Made "Get Quote" button redirect to new dedicated quote page (/quote)

### Services Page Updates
- Removed before/after photo gallery section from Services page
- Kept process and benefits sections intact

### New Quote Page
- Created comprehensive quote page with 2 main damage options:
  1. Large damage (larger than 6 inches) - leads to replacement
  2. Small damage (3 or fewer chips/cracks smaller than 6 inches) - repairable
- Dynamic form that shows chip count selection (1, 2, or 3) when small damage is selected
- Customer information form with name, phone, email, and damage description
- Quote submissions sent to info@autoglassomaha.com via mailto integration
- Visual windshield damage illustrations for each option
- Proper form validation and user feedback

### Quote Page UI Improvements (Latest)
- Made entire damage selection diagrams clickable, not just radio buttons
- Changed chip count selection to card-based boxes labeled 1, 2, and 3
- Updated damage option images to use actual windshield photos (broken.jpeg and crack.jpeg)
- Redirected all "Get Free Quote" buttons throughout the site to the new quote page (/quote)
- Updated Hero section, ChipRepairBenefits "Ready to Save Money and Time" section to redirect to quote page

### Quote Page Updates (January 2025)
- Made windshield images larger (h-40) and changed to object-contain for better visibility
- Replaced small damage image with newwind.png showing clear windshield with small chips
- Modified large damage section to display "coming soon" message instead of form
- Added referral information for Metro Glass Omaha and Omaha Glass Pro
- Updated form logic to only show customer information form for small damage repairs
- Large damage now shows service expansion message with local provider recommendations

### Database Integration (January 2025)
- ✓ Created PostgreSQL database using Neon serverless
- ✓ Added database connection layer with proper error handling
- ✓ Implemented DatabaseStorage class replacing MemStorage
- ✓ Updated storage interface to use Drizzle ORM for type-safe database operations
- ✓ Successfully pushed schema to database using `npm run db:push`
- ✓ Verified database connectivity and proper environment variable configuration

### Migration to Replit (January 2025)
- ✓ Successfully migrated project from Replit Agent to Replit environment
- ✓ Configured Node.js environment with all dependencies
- ✓ Switched to memory storage for immediate compatibility
- ✓ Application running on port 5000 with hot reload support
- ✓ Verified client-server separation and security practices

### Design and UX Updates (January 2025)
- ✓ Reduced blur effect on About page hero section (from blur-sm to blur-[1px])
- ✓ Enhanced image visibility with opacity increased from 20% to 40%
- ✓ Updated dealership services text: "24/7 On Site" → "Flexible On-Site"
- ✓ Centered bottom cards on Dealership Services and Fleet Services pages
- ✓ Removed empty stars from Services page "Trusted by Omaha Drivers"
- ✓ Added wave-wash hover effects to Email Us buttons matching homepage CTA
- ✓ Applied hover effects to Call Now buttons across pages

### Content Updates (January 2025)
- ✓ Updated service area: replaced "Boys Town" with "Bennington" in footer
- ✓ Changed emergency banner: "Need Emergency Auto Glass Service?" → "Call Us for Urgent Service"
- ✓ Updated button text: "Text Number Now" → "Call Number Now"
- ✓ Removed all business hours mentions from footer
- ✓ Changed "24/7 Emergency Service" → "Flexible Emergency Service"
- ✓ Updated Services page quote button to properly route to /quote page

### Quote Page Improvements (January 2025)
- ✓ Replaced quote page images with new windshield illustrations
- ✓ Large damage: updated to newrwin.png (red windshield with crack)
- ✓ Small damage: updated to newgwin.png (teal windshield with chips)
- ✓ Maintained clickable damage selection areas and improved visual clarity

### Fleet Services Cleanup (January 2025)
- ✓ Removed duplicate "Consolidated Invoicing" and "Maintenance Tracking" cards
- ✓ Centered remaining benefit cards for better visual balance
- ✓ Streamlined benefits to 4 key items instead of 5

### Latest Website Updates (January 2025)
- ✓ Quote page images: Replaced with newrwin.png (large damage) and newgwin.png (small damage)  
- ✓ Enhanced image zoom level with scale-150 for better windshield visibility
- ✓ Fleet page: Centered all 4 benefit cards in 2x2 grid layout
- ✓ Business hours: Removed all mentions across the website
- ✓ Emergency service: Changed "24/7" to "Flexible" throughout site
- ✓ About page: Updated stats to show "Flexible Emergency Service"
- ✓ Services component: Updated emergency service description and features
- ✓ Fleet services: Updated titles and descriptions to use "Flexible" instead of "24/7"

### Hero Page Content Update (January 2025)
- ✓ **Main Title**: Reverted to "Save hundreds on replacing your windshield"
- ✓ **Main Description**: Reverted to original mobile repair messaging
- ✓ **Right Section Update**: Moved "Local Care Makes the Difference" messaging to icon section
- ✓ **Right Section Content**: Updated with Omaha weather damage and cost escalation messaging
- ✓ **Bullet Points Optimization**: Shortened text for mobile-friendly single-line display:
  - Same-day or next day service
  - We don't pressure unnecessary replacement
  - Personal help, not corporate call centers
  - 15-30 minute repairs at your location
- ✓ **Mobile Responsive**: Added text-sm on mobile and text-base on larger screens for better readability

### Email System Status (January 2025)
- ✓ **Quote Form Functionality**: Quote form properly captures and logs all customer information
- ✓ **Console Logging**: All quote requests clearly logged for immediate access
- ✓ **AWS SES Integration**: Email system attempts delivery to info@zip.glass
- ⚠️ **Email Delivery**: Pending AWS SES domain verification for info@zip.glass email address
- ✓ **User Experience**: Form shows success message regardless of email delivery status

### Security Updates (January 2025)
- ✓ **Dependency Updates**: Applied npm audit fix for most moderate security vulnerabilities
- ✓ **Build Tool Security**: Updated esbuild to version 0.25.0 for enhanced security
- ✓ **Vite Security**: Confirmed Vite at version 5.4.19 addressing known vulnerabilities
- ✓ **Drizzle Kit Update**: Updated to version 0.31.4 to resolve nested dependency issues

### Performance Optimization & Stability Measures (January 2025)
- ✓ Lazy loading: Implemented for all images across the website (loading="lazy" for non-critical images)
- ✓ Critical resource preloading: Added preload for logo image and font connections
- ✓ Removed unused components: Eliminated 11 unused UI components (chart, input-otp, menubar, navigation-menu, progress, resizable, sidebar, use-toast, etc.)
- ✓ Cleaned up assets: Removed unused image files (broken.jpeg, crack.jpeg, newwind.png)
- ✓ HTML optimization: Added meta description, keywords, author, robots, and canonical URL
- ✓ Font optimization: Added preconnect for Google Fonts to improve loading performance
- ✓ CSS optimization: Added performance improvements for font smoothing and image rendering
- ✓ Accessibility: Added reduced motion support for users with motion sensitivity
- ✓ External scripts: Added defer attribute to Replit banner script for better page load performance
- ✓ Verified no broken imports or console errors in the codebase

### UI/UX Improvements (January 2025)
- ✓ Removed 404 error page from routing to prevent display at bottom of pages
- ✓ Updated Hero section: Changed "Trusted by 500+ Omaha Drivers" to "Trusted by Omaha Drivers"
- ✓ Modified Hero rock chip benefit: Changed "$0 Insurance Deductible" to "No Glass Warping"
- ✓ Quote page enhancements: Increased windshield image zoom from scale-150 to scale-200
- ✓ Quote page styling: Made large damage selection border red when selected
- ✓ Quote page radio button: Made large damage radio button red when selected
- ✓ Button text improvements: Changed "Call Now" and "Email Us" button text to black for better readability
- ✓ Fixed routing: Converted all anchor tag links to proper Link components for SPA navigation

### Quote Page Updates (January 2025)
- ✓ Updated damage size threshold from 8 inches to 10 inches for both options
- ✓ Reverted collapsible functionality - Steps 1 and 2 remain open for better user experience
- ✓ Enhanced form validation with real-time error display and secure input handling
- ✓ Increased windshield image zoom to 300% (scale-[3]) for maximum customer visibility

### Security & Code Optimization (January 2025)
- ✓ Created comprehensive security utilities module with input validation and sanitization
- ✓ Enhanced form validation for all contact forms with proper error handling
- ✓ Secured database URL validation and error handling in server configuration
- ✓ Improved server logging to prevent sensitive data exposure
- ✓ Sanitized all user inputs before processing in mailto links
- ✓ Removed unused UI components to reduce bundle size
- ✓ Optimized codebase by cleaning up dead code and improving efficiency
- ✓ **Critical Security Fix**: Upgraded Vite from ^5.4.14 to ^5.4.19 to patch CVE-2025-30208 vulnerability
- ✓ Applied minimal security patch with zero breaking changes to maintain application stability

### Direct Email Integration & Performance Improvements (January 2025)
- ✓ **AWS SES Integration**: Implemented direct email sending for quote form using AWS SES backend
- ✓ **Quote Form Enhancement**: Added loading states, success/error messages for better user experience
- ✓ **Email Domain Update**: Changed all email references from autoglassomaha.com to zip.glass
- ✓ **Smooth Scrolling Optimization**: Added hardware acceleration and smooth scrolling animations across all pages
- ✓ **Performance Enhancements**: Implemented scroll containers with optimized CSS for eliminating scroll lag
- ✓ **Form UX Improvements**: Quote form now submits directly without requiring email client interaction

### Complete Brand Redesign (January 2025)
- ✓ **New Color Scheme**: Redesigned entire website with #ec192f red as primary color and #000000 black as secondary
- ✓ **Button Theming**: Updated all clickable buttons and interactive elements to use new red/black color palette
- ✓ **Component Updates**: Modified ChipRepairBenefits and other components to use new brand colors
- ✓ **CSS Variable System**: Updated root CSS variables for consistent theming across all pages
- ✓ **Maintained White Backgrounds**: Preserved clean white backgrounds/headers as requested while implementing new accent colors
- ✓ **Colorful Icons Restored**: Restored original colorful icons in ChipRepairBenefits component (green, blue, orange, purple, red, teal)
- ✓ **Typography Update**: Changed font from Urbanist to Inter to match SpeedyGlass.com modern sans-serif style
- ✓ **Hero Background**: Replaced navy gradient with "recreate.webp" background image showing professional auto glass repair
- ✓ **Logo Replacement**: Replaced "Omaha Auto Glass Repair" logo and text with "zipglasswide.jpg" logo throughout site
- ✓ **Footer Colors**: Changed footer background from slate-900 to primary red (#ec192f) with white text and contrasts
- ✓ **Brand Name Update**: Updated all references from "Omaha Auto Glass Repair" to "Zip Glass" across components
- ✓ **Asset Updates**: Fixed hero background to use "recreation.png" (professional auto glass repair image)
- ✓ **Logo Integration**: Updated all logo references to use "zipglasswide.jpg" with proper sizing and clickable navigation
- ✓ **Icon Color Updates**: Changed hero page sales box icons to alternating red/black theme for brand consistency
- ✓ **Emergency Banner**: Changed "Call Us for Urgent Service" banner background from red to black for better contrast
- ✓ **Warning Box Redesign**: Updated chip warning box to match dealership services box style with prominent CTA design
- ✓ **Asset Loading Fix**: Fixed all image loading issues by using proper Vite asset imports (@assets aliases)
- ✓ **Services Page CTA**: Moved the dealership-style warning box from home page to Services page CTA section
- ✓ **Home Page Revert**: Restored home page chip warning to original pill-style design
- ✓ **TypeScript Fixes**: Resolved all TypeScript errors for proper image event handling
- ✓ **Footer Updates**: Removed failed image embed, replaced with text logo, updated Instagram link to https://www.instagram.com/zipglass/#
- ✓ **Hero Logo Update**: Changed hero logo to new Z icon (zicon.png) instead of wide logo
- ✓ **Hero Bullets Fix**: Made all hero page bullets red instead of alternating red/black
- ✓ **Header Text Color**: Changed header text from light gray to charcoal (slate-800) for better readability
- ✓ **Header Logo Update**: Replaced header logo with new "zipglasschonk" wide logo
- ✓ **Hero Logo Zoom**: Increased hero page logo size by 100% (h-32 instead of h-16)
- ✓ **About Page Logo**: Updated About page to use Z icon with 100% larger size and container
- ✓ **Brand Consistency**: Changed all remaining "Omaha Auto Glass Repair" references to "Zip Glass"
- ✓ **Quote Page Green Theme**: Updated small damage options to use green checkmark theme instead of red/primary colors
- ✓ **Radio Button Fix**: Fixed small damage radio button to fill with green when selected (matching large damage behavior)
- ✓ **Logo Sizing Revert**: Reverted logo zoom increase back to original sizes on hero and about pages
- ✓ **Quote Page Numbers**: Updated chip count numbers to always show green color before selection
- ✓ **Repair Process Update**: Changed Services page repair process to gradient format matching fleet page with numbered circles (1-6 steps)