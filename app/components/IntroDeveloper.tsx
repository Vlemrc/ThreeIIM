interface IntroProps {
  color: string | undefined;
}

export default function IntroDeveloper({ color }: IntroProps) {
    return (
        <div className="fixed z-10 bottom-10 left-12 opacity-70">
            <p 
                className="text-[9px] uppercase transition-all duration-300"
                style={{ color: color || 'white' }}
            >
                Web developer currently
            </p>
            <p 
                className="text-[9px] uppercase transition-all duration-300"
                style={{ color: color || 'white' }}
            >
                pursuing a Master's degree
            </p>
        </div>
    )
}