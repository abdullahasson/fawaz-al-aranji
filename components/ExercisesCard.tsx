// Image
import Image from "next/image"

interface ExercisesCardProps {
    bodyPart : String;
    equipment : String;
    gifUrl : any;
    id : String;
    name : String;
    target : String;
    secondaryMuscles : String[];
    instructions : String[]
}

export default function ExercisesCard({ bodyPart , equipment , gifUrl , id , name , target , secondaryMuscles , instructions }: ExercisesCardProps) {
    return (
        <div className="exercise-card flex-1 border border-[var(--gold)]transition-all rounded-xl bg-[var(--ivory)] overflow-hidden">
            <div className="card-header">
                <h1 className="exercise-title">{name}</h1>
                <div className="exercise-info">
                    <span>المستوى: {target}</span>
                    <span>ID: {id}</span>
                </div>
            </div>
            <div className="card-body">
                <div className="gif-container">
                    <Image src={gifUrl} alt="gif" className="gif-iframe" />
                </div>
                <div className="muscles-section">
                    <h3 className="section-title">العضلات المستخدمة</h3>
                    <ul className="muscles-list">
                        {secondaryMuscles.map((muscle: any) => (
                            <li key={muscle}>{muscle}</li>
                        ))}
                    </ul>
                </div>
                <div className="instructions-section">
                    <h3 className="section-title">الخطوات</h3>
                    <ol className="instructions-list">
                        {instructions.map((instruction: any) => (
                            <li key={instruction}>{instruction}</li>
                        ))}
                    </ol>
                </div>
                <div className="equipment-chip">{equipment}</div>
            </div>
        </div>
    )
}