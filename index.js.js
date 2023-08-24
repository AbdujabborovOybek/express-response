class responseService {
  async success(res, message, data) {
    return res.status(200).json({
      message: message || "Success",
      variant: "success",
      innerData: data || null,
    });
  }

  async error(res, message) {
    return res.status(500).json({
      message: message || "Internal Server Error",
      variant: "error",
    });
  }

  async warning(res, message) {
    return res.status(400).json({
      message: message || "Bad Request",
      variant: "warning",
    });
  }

  async notFound(res, message) {
    return res.status(404).json({
      message: message || "Not Found",
      variant: "error",
    });
  }

  async badRequest(res, message) {
    return res.status(400).json({
      message: message || "Bad Request",
      variant: "error",
    });
  }

  async unauthorized(res, message) {
    return res.status(401).json({
      message: message || "Unauthorized",
      variant: "error",
    });
  }

  async forbidden(res, message) {
    return res.status(403).json({
      message: message || "Forbidden",
      variant: "error",
    });
  }

  async conflict(res, message) {
    return res.status(409).json({
      message: message || "Conflict",
      variant: "error",
    });
  }

  async created(res, message) {
    return res.status(201).json({
      message: message || "Created",
      variant: "success",
    });
  }

  async noContent(res, message) {
    return res.status(204).json({
      message: message || "No Content",
      variant: "info",
    });
  }
}

module.exports = new responseService();
