import "./educations.css"

function Educations() {
    return (
        <section className="educations-section text-white flex flex-col gap-18 mt-18 mx-[10%] h-auto">
            <h2 className="text-4xl font-semibold">EDUCATIONS</h2>
            <div className="timeline relative flex flex-col gap-10 pl-[10%] ml-[10%]">
                <div className="timeline-marker absolute -left-3 flex justify-center items-center w-[30px] h-[30px] bg-black rounded-full">
                    <div className="markerDot w-[20px] h-[20px] rounded-full"></div>
                </div>
                <div className="timeline-content flex flex-col items-start gap-1">
                    <div className="date-range text-center font-bold px-4 py-2 rounded-full">2025 - en cours</div>
                    <h3 className="text-2xl font-bold">Bachelor’s Degree in Computer Science</h3>
                    <h4 className="school text-xl font-bold">Haute Ecole d'Informatique</h4>
                    <p className="text-gray-400">Madagascar Antananarivo</p>
                </div>
                <div className="timeline-marker absolute top-[58%] -left-3 flex justify-center items-center w-[30px] h-[30px] bg-black rounded-full">
                    <div className="markerDot w-[20px] h-[20px] rounded-full"></div>
                </div>
                <div className="timeline-content flex flex-col items-start gap-1">
                    <div className="date-range text-center font-bold px-4 py-2 rounded-full">2024 - 2025</div>
                    <h3 className="text-2xl font-bold">High School Diploma</h3>
                    <h4 className="school text-xl font-bold">Lycee sacre coeur de Behenjy</h4>
                    <p className="text-gray-400">Behenjy 104</p>
                </div>
            </div>
        </section>
    )
}

export default Educations;