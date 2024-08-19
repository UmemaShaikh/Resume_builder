import React from "react";
import { Button, Form, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function SkillsEducation() {
  return (
    <div>
      <h5><b>Education</b></h5>
      <hr/>
      <Form.List name="Education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "Qualification"]}
                      rules={[
                        { required: true, message:"Please enter your Qualifications" },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "Percentage"]}
                      rules={[
                        { required: true, message:"Please enter your Marks" },
                      ]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "Institution"]}
                      rules={[
                        { required: true, message:"Please enter your Institution" },
                      ]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "year"]}
                      rules={[
                        { required: true, message:"Please enter year arnge" },
                      ]}
                    >
                      <Input placeholder="Year Range" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 20, color: "red" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>


      <h5><b>Skills</b></h5>
      <hr/>
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "technology"]}
                      rules={[
                        { required: true,  message:"Please enter Technology" },
                      ]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[{ required: true, message:"Please enter rating out 10"}]}
                    >
                      <Input placeholder="Rating" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <MinusCircleOutlined
                      style={{ fontSize: 20, color: "red" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skills
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default SkillsEducation;
