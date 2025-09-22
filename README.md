# React Styled Components Learning Project

A comprehensive learning project demonstrating various styled-components patterns and techniques in React with Vite.

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Styled Components** - CSS-in-JS styling solution
- **Material-UI** - React component library with pre-styled components
- **React Router DOM** - Client-side routing
- **Emotion** - Alternative CSS-in-JS library

## ✨ Features Demonstrated

### Styled Components Patterns
- **Component Variants** - Different button styles using props
- **Theme Provider** - Global theme management with light/dark themes
- **Global Styles** - Application-wide CSS reset and base styles
- **Keyframes Animation** - Rotating logo animation
- **Component Composition** - Building complex components from simpler ones
- **Dynamic Styling** - Conditional styles based on props

### Advanced Techniques
- **Styled Component Inheritance** - Extending existing styled components
- **Attribute Passing** - Using `.attrs()` for default props
- **Theme Integration** - Accessing theme values in styled components
- **Hover Effects & Transitions** - Interactive state styling
- **Responsive Design** - Adaptive layouts and sizing

## 📁 Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.js                 # Main button component
│   │   ├── Button.styles.js          # All button variants and animations
│   │   ├── TimePicker.jsx            # Time selection component
│   │   ├── StatusActiveInput.jsx     # Status input component
│   │   └── StatusActiveInputs.jsx    # Multiple status inputs
│   ├── DropDown.jsx                  # Dropdown selection component
│   ├── Accordion/
│   │   └── Accordion.jsx             # Collapsible content component
│   └── StyledComponents/
│       ├── Main.jsx                  # Styled components demo page
│       ├── Header.jsx                # Styled header component
│       └── Container/
│           ├── Container.styled.js   # Container styling
│           └── Header.styled.js      # Header styling
├── App.jsx                           # Main application component
├── App.css                           # Additional CSS styles
└── styles.css                        # Global styles
```

## 🛠 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.\
The build is optimized and ready for deployment.

### `npm run preview`
Serves the production build locally for testing.\
Open [http://localhost:4173](http://localhost:4173) to view it.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-styled-components-learning
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📚 Component Examples

### Button Components
- **StyledButton** - Base button with variant support (outlined/solid)
- **FancyButton** - Gradient background button extending StyledButton
- **SubmitButton** - Submit button with active state animations
- **DarkButton** - Theme-aware button using dark theme colors
- **AnimatedLogo** - Rotating logo with keyframe animation

### Form Components
- **TimePicker** - Time selection interface
- **StatusActiveInput** - Status indicator input component
- **StatusActiveInputs** - Multiple status input management
- **DropDown** - Custom dropdown selection component

### Layout Components
- **Accordion** - Collapsible content sections
- **Container** - Responsive layout container
- **Header** - Styled page header component

### Navigation
- **React Router** integration with styled Link components
- **Route-based rendering** for different pages
- **Styled Components page** - Dedicated demo page for advanced patterns

## 🎨 Learning Objectives

This project serves as a comprehensive guide to:

1. **Styled Components Basics** - Creating and using styled components
2. **Advanced Styling Patterns** - Inheritance, composition, and theming
3. **Animation & Interactions** - Keyframes, hover effects, and transitions
4. **Theme Management** - Global theme providers and context
5. **Component Architecture** - Building reusable, maintainable components
6. **Integration with Other Libraries** - Using styled-components with Material-UI

## 📄 License

This project is for educational purposes only.
