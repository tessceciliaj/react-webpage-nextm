export default function StudentCard(data) {
    return (
        <div>
            <img src={data.img} />
            <h3>{data.name}</h3>
            <p>{data.profession}</p>
        </div>
    );
}
