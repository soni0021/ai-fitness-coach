# 💪 AI Fitness Coach

An advanced AI-powered fitness assistant built with **Next.js 14** that generates **personalized workout and diet plans** using Google Gemini AI. Features include voice synthesis, image generation, PDF export, and a modern responsive design.

## 🚀 Features

### Core Functionality
- **Personalized AI Plans**: Custom workout and diet plans based on user profile
- **Advanced Form**: Multi-step form with validation and smooth animations
- **Voice Synthesis**: Text-to-speech functionality with customizable settings
- **Image Generation**: Visual representations of exercises and meals
- **PDF Export**: Professional plan export for offline use
- **Local Storage**: Plan persistence and user preferences
- **Dark/Light Mode**: Theme toggle with system preference detection

### User Input Collection
- Name, Age, Gender, Height & Weight
- Fitness Goals (Weight Loss, Muscle Gain, etc.)
- Current Fitness Level (Beginner/Intermediate/Advanced)
- Workout Location (Home/Gym/Outdoor)
- Dietary Preferences (Veg/Non-Veg/Vegan/Keto/etc.)
- Optional: Medical history, stress level, sleep hours, water intake

### AI-Generated Content
- **7-Day Workout Plans**: Detailed exercises with sets, reps, and rest times
- **Comprehensive Diet Plans**: Meal breakdowns with calories and macros
- **Personalized Tips**: Lifestyle and fitness recommendations
- **Daily Motivation**: AI-generated motivational quotes

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS + Shadcn UI |
| **AI Integration** | Google Gemini API |
| **Animations** | Framer Motion |
| **Voice Synthesis** | Web Speech API |
| **PDF Generation** | jsPDF + html2canvas |
| **State Management** | React Hooks + Local Storage |
| **Type Safety** | TypeScript |

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-fitness-coach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys to `.env.local`:
   ```env
   GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
   NANO_BANANA_API_KEY=your_nano_banana_api_key_here  # Optional
   ELEVENLABS_API_KEY=your_elevenlabs_api_key_here    # Optional
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 API Keys Setup

### Required: Google Gemini API
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file as `GOOGLE_GEMINI_API_KEY`

### Optional: Additional APIs
- **Nano Banana API**: For enhanced image generation
- **ElevenLabs API**: For premium voice synthesis (fallback)

## 🎯 Usage

1. **Fill User Profile**: Complete the multi-step form with your details
2. **Generate Plan**: AI creates personalized workout and diet plans
3. **Listen to Plans**: Use TTS to hear your plans read aloud
4. **View Images**: Generate visual representations of exercises/meals
5. **Export PDF**: Download your plan for offline use
6. **Regenerate**: Create new variations of your plan

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── generate-plan/route.ts     # Main plan generation
│   │   ├── generate-image/route.ts    # Image generation
│   │   └── motivational-quote/route.ts # Daily quotes
│   ├── globals.css                    # Global styles
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Main page
├── components/
│   ├── ui/                           # Shadcn UI components
│   ├── UserForm.tsx                  # Multi-step form
│   ├── PlanDisplay.tsx               # Plan visualization
│   ├── TTSControls.tsx               # Voice controls
│   ├── ImageGenerator.tsx            # Image generation
│   ├── MotivationalQuote.tsx         # Daily motivation
│   ├── ThemeProvider.tsx             # Theme management
│   └── ThemeToggle.tsx               # Dark/light toggle
└── lib/
    ├── gemini.ts                     # Gemini AI integration
    ├── tts.ts                        # Text-to-speech utilities
    └── utils.ts                      # Utility functions
```

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Performance**: Optimized loading, lazy loading, and efficient API calls
- **Black & White Theme**: Professional color scheme with dark mode support

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app is serverless-compatible and can be deployed on:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Customizing AI Prompts
Edit the prompts in `src/lib/gemini.ts` to adjust AI behavior:
- Workout plan generation
- Diet plan creation
- Motivational quotes

### Styling Customization
- Modify `tailwind.config.js` for theme colors
- Update `src/app/globals.css` for global styles
- Customize Shadcn components in `src/components/ui/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent plan generation
- **Shadcn UI** for beautiful, accessible components
- **Framer Motion** for smooth animations
- **Next.js** for the robust framework
- **Tailwind CSS** for utility-first styling

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include your environment details and error messages

---

**Made with ❤️ and AI** - Transform your fitness journey today!