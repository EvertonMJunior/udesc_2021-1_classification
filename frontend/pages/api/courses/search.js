import connectDB from "../../../middlewares/mongodb";
import Courses from "../../../models/course";
import FuzzySearch from "fuzzy-search";
import diacritics from "diacritics";

const handler = async (req, res) => {
  let { q } = req.query;
  if (!q) {
    return res.status(200).json({ results: [] });
  }

  let courses = await Courses.aggregate([
    {
      $project: {
        _id: 0,
      },
    },
  ]);

  courses.forEach((course) => {
    course["search_name"] = diacritics.remove(course["name"]);
  });

  const searcher = new FuzzySearch(courses, ["search_name"], {
    caseSensitive: false,
    sort: true,
  });
  let results = searcher.search(diacritics.remove(q));

  results.forEach((course) => {
    course["search_name"] = undefined;
  });
  results = results.slice(0, 10);

  return res.status(200).json({ courses: results });
};

export default connectDB(handler);
