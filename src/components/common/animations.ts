export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1
    } 
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
}
