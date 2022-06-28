import topic from '../../../data/topic.json';
export default function handler(req, res) {
  const id = Number(req.query.id);
  const _topic = topic.filter((el) => (el.id === id ? true : false));
  res.status(200).json(_topic);
}
