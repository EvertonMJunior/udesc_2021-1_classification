import connectDB from "../../../../middlewares/mongodb";
import Candidates from "../../../../models/candidate";
import Courses from "../../../../models/course";
import _ from "lodash";

function verifyNumber(number) {
  return (
    number !== undefined &&
    number !== null &&
    typeof number === "number" &&
    !Number.isNaN(number)
  );
}

const handler = async (req, res) => {
  let { id, list } = req.query;
  if (!id || verifyNumber(id)) {
    return res.status(400).json({});
  }

  if (!list || verifyNumber(list)) {
    return res.status(400).json({});
  }

  id = Number(id);
  list = Number(list);

  let course = (
    await Courses.aggregate([
      {
        $match: {
          id: id,
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ])
  )[0];
  let candidates = await Candidates.aggregate([
    {
      $match: {
        course: id,
        list_id: list,
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);

  let classification = {};

  _.chain(candidates)
    .groupBy("affirmative_action_policy")
    .forEach((groupCandidates, groupName) => {
      classification[groupName] = _.chain(groupCandidates).orderBy(
        "grade",
        "desc"
      );
    })
    .value();

  return res.status(200).json({ course, classification });
};

export default connectDB(handler);
