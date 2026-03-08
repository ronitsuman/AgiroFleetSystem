import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
{
 action: String,

 userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 },

 entityId: mongoose.Schema.Types.ObjectId,

 entityType: String
},
{ timestamps: true }
);

export default mongoose.model("AuditLog", auditLogSchema);