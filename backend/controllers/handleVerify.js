export default function handleVerify(req, res) {
    return res.json(req.user)
}