// import AuditLog from "../models/AuditLog.js";

// export const logAudit = async (action, userId, entityId, entityType) => {

//  await AuditLog.create({
//   action,
//   userId,
//   entityId,
//   entityType
//  });

// };
import AuditLog from "../models/AuditLog.js";

export const logAudit = async ({
 action,
 userId,
 entityId,
 entityType,
 meta = {}
}) => {

 try {

  await AuditLog.create({
   action,
   userId,
   entityId,
   entityType,
   meta
  });

 } catch (err) {

  console.error("Audit log error:", err.message);

 }

};