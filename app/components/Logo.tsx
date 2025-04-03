"use client"
import { motion } from "framer-motion"

interface LogoProps {
  setActiveProject: (id: number | null) => void
  color: string | undefined
  setIsVisible: (isVisible: boolean) => void
}

export default function Logo({ color, setActiveProject, setIsVisible }: LogoProps) {
  const handleClose = () => {
    setIsVisible(false)

    setTimeout(() => {
      setActiveProject(null)
    }, 300)
  }

  // Animation variants for the letters
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 500, // Higher stiffness for faster return
        damping: 15, // Slightly higher damping for less oscillation
        delay: i * 0.02, // Reduced delay between letters when returning
        duration: 0.2, // Shorter duration
      },
    }),
    hover: (i: number) => ({
      scale: 1.1,
      y: -10,
      z: 50, // 3D effect
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: i * 0.03,
      },
    }),
  }

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger when returning
        delayChildren: 0.1, // Less delay before starting return animation
        when: "beforeChildren",
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0,
        when: "beforeChildren",
      },
    },
  }

  const paths = [
    "M182.02,117h26.93l-27.32,273.95h2.34l56.58-273.95h26.93l-70.24,304.38h-37.85l22.63-304.38Z",
    "M278.02,117h27.32l-44.88,304.38h-27.32l44.88-304.38Z",
    "M283.87,380.02l32.78-222.44c3.51-22.63,13.66-44.49,46.44-44.49,26.93,0,41.76,16.78,37.46,45.27l-12.49,85.07h-26.15l12.49-87.8c1.95-13.66-4.68-19.9-13.27-19.9s-14.83,5.07-17.17,19.9l-33.17,227.12c-1.95,13.66,4.68,19.9,13.27,19.9s14.83-5.07,17.17-19.9l11.71-78.44h26.15l-11.32,76.88c-3.12,22.24-13.66,44.1-45.66,44.1-27.32,0-42.53-16.78-38.24-45.27Z",
    "M434.49,140.42h-27.32l3.51-23.41h81.95l-3.51,23.41h-27.7l-41.37,280.97h-26.93l41.36-280.97Z",
    "M459.85,380.02l32.78-222.44c3.51-22.63,13.66-44.49,48-44.49,29.27,0,44.1,16.78,39.81,45.27l-32.78,222.83c-3.12,22.24-13.66,44.1-48,44.1-28.88,0-44.1-16.78-39.8-45.27ZM501.61,402.65c10.15,0,16.78-7.02,18.73-19.9l33.17-227.12c1.95-12.1-4.68-19.9-14.83-19.9s-16.78,7.02-18.73,19.9l-33.17,227.12c-1.95,12.1,4.68,19.9,14.83,19.9Z",
    "M619.07,265.29h-10.14l-22.63,156.09h-27.32l44.88-304.38h33.95c44.1,0,51.9,36.29,44.1,82.34-5.07,30.44-16.78,51.9-36.29,61.27l2.73,160.78h-26.54l-2.73-156.09ZM620.24,241.88c16.78,0,27.71-7.8,33.56-42.93,7.8-46.44,3.51-58.53-24.97-58.53h-1.56l-14.83,101.46h7.8Z",
    "M784.91,117h26.93l-40.97,280.97h39.41l-3.51,23.41h-66.73l44.88-304.38Z",
    "M887.54,140.42l-13.66,94.05h42.53l-3.51,23.41h-42.54l-20.68,140.1h47.61l-3.51,23.41h-74.92l44.88-304.38h72.97l-3.12,23.41h-46.05Z",
    "M957.39,117h37.85l-16,260.68h2.34l64-260.68h37.85l-35.51,304.38h-26.93l35.51-256.78h-2.34l-64.78,256.78h-30.83l13.66-256.78h-2.34l-42.93,256.78h-27.32l57.75-304.38Z",
    "M1130.65,140.42l-13.66,94.05h42.54l-3.51,23.41h-42.53l-20.68,140.1h47.61l-3.51,23.41h-74.93l44.88-304.38h72.97l-3.12,23.41h-46.05Z",
    "M1207.52,265.29h-10.14l-22.63,156.09h-27.32l44.88-304.38h33.95c44.1,0,51.9,36.29,44.1,82.34-5.07,30.44-16.78,51.9-36.29,61.27l2.73,160.78h-26.54l-2.73-156.09ZM1208.69,241.88c16.78,0,27.71-7.8,33.56-42.93,7.8-46.44,3.51-58.53-24.97-58.53h-1.56l-14.83,101.46h7.8Z",
    "M1256.3,380.02l32.78-222.44c3.51-22.63,13.66-44.49,46.44-44.49,26.93,0,41.75,16.78,37.46,45.27l-12.49,85.07h-26.15l12.49-87.8c1.95-13.66-4.68-19.9-13.27-19.9s-14.83,5.07-17.17,19.9l-33.17,227.12c-1.95,13.66,4.68,19.9,13.27,19.9s14.83-5.07,17.17-19.9l11.71-78.44h26.15l-11.32,76.88c-3.12,22.24-13.66,44.1-45.66,44.1-27.32,0-42.54-16.78-38.24-45.27Z",
    "M1396.39,117h27.32l-44.88,304.38h-27.32l44.88-304.38Z",
    "M1465.07,140.42l-13.66,94.05h42.53l-3.51,23.41h-42.54l-20.68,140.1h47.61l-3.51,23.41h-74.92l44.88-304.38h72.97l-3.12,23.41h-46.05Z",
    "M1541.94,265.29h-10.15l-22.63,156.09h-27.32l44.88-304.38h33.95c44.1,0,51.9,36.29,44.1,82.34-5.07,30.44-16.78,51.9-36.29,61.27l2.73,160.78h-26.54l-2.73-156.09ZM1543.11,241.88c16.78,0,27.7-7.8,33.56-42.93,7.8-46.44,3.51-58.53-24.98-58.53h-1.56l-14.83,101.46h7.8Z",
  ]

  return (
    <div
      className={`absolute z-10 top-6 left-6 flex items-center justify-center w-[200px] cursor-pointer ${color ? "opacity-70" : "opacity-100"} hover:opacity-100 transition-opacity duration-300 ease-in-out`}
      onClick={handleClose}
      style={{ perspective: "1000px" }} // Add perspective for 3D effect
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1766.82 538.39"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileHover="hover"
        style={{ transformStyle: "preserve-3d" }} // Preserve 3D transformations
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            custom={index}
            variants={letterVariants}
            fill={color ? color : "#fff"}
            className="transition-colors duration-300 transition"
            d={path}
          />
        ))}
      </motion.svg>
    </div>
  )
}

