const Person = (props) => {
    const { firstName, lastName, age } = props
    return (
        <>
            <h1>{firstName || "max"}</h1>
            <h1>{lastName || "Müller"}</h1>
            <h1>{age || 25}</h1>
            <hr />
        </>
    );
};


export default Person;