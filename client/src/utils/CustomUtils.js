/**
 * Converts an angle (in degrees or radians) to a y-axis rotation value (in radians).
 * @param angle - The angle to rotate, in degrees or radians.
 * @param isDegrees - If true, the input angle is interpreted as degrees. Defaults to true.
 * @returns The equivalent y-axis rotation in radians.
 */
// TS VERSION
// const rotationYAngleToYaw = (angle: number, isDegrees = true): number => {
//     return isDegrees ? (angle * Math.PI) / 180 : angle;
//   };
const rotationYAngleToYaw = (angle, isDegrees = true) => {
  return isDegrees ? (angle * Math.PI) / 180 : angle;
};

export { rotationYAngleToYaw };
