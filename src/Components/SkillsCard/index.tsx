interface SkillCardProps {
    title: string
    imgUrl: string
    skillLevel: string
}

const SkillsCard = ({ title, imgUrl, skillLevel }: SkillCardProps) => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 w-24'>
            <h2 className='text-center text-white'>{title}</h2>
            <img src={imgUrl} alt={title} />
            <div className='bg-[#4a5158] rounded-lg h-1 w-full'>
                <div className={`bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 rounded-lg h-1`} style={{width: `${skillLevel}`}}></div>
            </div>
        </div>
    )
}

export default SkillsCard