import { DataTypes } from "sequelize";
import { db } from "../index";
import Provider from "./provider.model";
import CptCode from "./cptCode.model";

const ProviderCptApproval = db.define("providerCptApproval", {
  providerCptApproval_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: DataTypes.UUIDV4,
  },
  provider_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Provider,
      key: "provider_id",
    },
  },
  cpt_code: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: CptCode,
      key: "cpt_code",
    },
  },
  approval_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  denial_reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Create the table
(async () => {
  try {
    await Provider.sync();
    await CptCode.sync();

    await ProviderCptApproval.sync(); // This will create the table if it doesn't exist
    console.log("ProviderCptApprovals table created successfully.");
  } catch (error) {
    console.error("Unable to create providers table:", error);
  }
})();

export default ProviderCptApproval;
