import { zEthAddress } from "@ordao/ortypes";
import { z } from "zod";

export const zOrdaoDeployment = z.object({
  oldRespect: zEthAddress,
  newRespect: zEthAddress,
  orec: zEthAddress
});
export type OrdaoDeployment = z.infer<typeof zOrdaoDeployment>;
