"use server";

import connectMongo from "@/lib/mongoose";
import AppearanceModel from "@/model/appearance";
import { replaceMongoIdInArray } from "@/utils/data-utils";

export async function updateAppearance(data) {
  try {
    await connectMongo();

    let operations;

    if (data instanceof FormData) {
      const types = data.getAll("type[]");
      const values = data.getAll("value[]");

      if (types.length !== values.length) {
        throw new Error("Mismatched types and values.");
      }

      operations = types
        .map((type, index) => ({ type, value: values[index] }))
        .filter((item) => item.value)
        .map((item) => ({
          updateOne: {
            filter: { type: item.type },
            update: { $set: { value: item.value } },
            upsert: true,
          },
        }));
    } else if (
      typeof data === "object" &&
      data !== null &&
      !Array.isArray(data) &&
      data.type &&
      data.value
    ) {
      // Handle single object update
      operations = [
        {
          updateOne: {
            filter: { type: data.type },
            update: { $set: { value: data.value } },
            upsert: true,
          },
        },
      ];
    } else {
      return {
        success: false,
        msg:
          "Invalid data format. Expected FormData or an object with type and value.",
      };
    }

    if (!operations || operations.length === 0) {
      return {
        success: false,
        msg: "No data to update.",
      };
    }

    const result = await AppearanceModel.bulkWrite(operations);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(result)),
    };
  } catch (err) {
    console.error("Failed to update/create appearance:", err.msg);
    return {
      success: false,
      msg: err.msg,
    };
  }
}

// export async function postAppearance(formData) {
//   const types = formData.getAll("type[]");
//   const values = formData.getAll("value[]");

//   const appearances = types.map((type, i) => ({
//     type,
//     value: values[i],
//   }));

//   try {
//     await connectMongo();
//     await AppearanceModel.updateMany(appearances);
//     return {
//       success: true,
//     };
//   } catch (err) {
//     console.error("Failed to save appearance:", err.msg);
//     return {
//       success: false,
//       msg: err.msg,
//     };
//   }
// }

export async function getAppearances() {
  try {
    await connectMongo();
    const appearances = await AppearanceModel.find().lean();

    return replaceMongoIdInArray(appearances);
  } catch (e) {
    console.log(e);
    return [];
  }
}
