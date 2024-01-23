export const getServerSideProps = async ({ req }) => {
    const token = req.headers.AUTHORIZATION
}
export default (req, res) => {
    res.status(200).send({status_code:200,description: "System up and running"}) 
};