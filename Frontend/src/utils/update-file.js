import { upload_update_File } from "../api/editon/edition";

export  const updateFile = ({file, type, version, yaml, forceUpdate, updateLog, opid = 'uuid'}) => {
  const data = new FormData()
  data.append("file", file)
  data.append("operationID", opid)
  data.append("type", type)
  data.append("version", version)
  data.append("forceUpdate", forceUpdate)
  yaml && data.append("yaml", yaml)
  data.append("updateLog", updateLog)
  return upload_update_File(data)
}