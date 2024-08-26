import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Space, TablePaginationConfig, Tooltip } from "antd";
import { TYPE_MANAGEMENT } from "../../../interface/constants/type/Type.const";
import ButtonBase from "../../../components/button-base/ButtonBase";
import { ROUTER_BASE } from "../../../router/router.constant";
import CardLayoutTemplate from "../../../components/layout-base/CardLayoutTemplate";
import FontAwesomeBase from "../../../components/font-awesome/FontAwesomeBase";
import FormSearchTemplate from "../../../components/form-base/form-search-base/FormSearchTemplate";
import FormSearchChildTemplate from "../../../components/form-base/form-search-base/FormSearchChildTemplate";
import InputTextTemplate from "../../../components/input-form/InputTextTemplate";
import TableTemplate from "../../../components/table-base/TableTemplate";

function Demo() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoadingTable] = useState<boolean>(true);

  const { control, getValues, setValue } = useForm({
    defaultValues: {
      code: "",
      name: "",
      type: "",
      current: TYPE_MANAGEMENT.DEFAULT_CURRENT,
      size: TYPE_MANAGEMENT.DEFAULT_SIZE,
      total: TYPE_MANAGEMENT.DEFAULT_TOTAL,
      sortField: null,
      sortType: "",
    },
  });

  const data = [] as any[];

  const columns = [
    {
      title: t("common.rowNum"),
      dataIndex: "rowNumber",
      key: "rowNumber",
      align: "center",
      showSorterTooltip: false,
      render: (text: any, record: any, index: number) =>
        getValues("current") * getValues("size") + index + 1,
    },
    {
      title: t("demoCrud.table.name"),
      dataIndex: "name",
      key: "name",
      sorter: true,
      showSorterTooltip: false,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("demoCrud.table.code"),
      dataIndex: "code",
      key: "code",
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: t("common.action"),
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <Tooltip title={t("common.button.detail")}>
            <ButtonBase
              category="detail"
              onClick={() =>
                navigate(
                  `${ROUTER_BASE.demo.path}/${TYPE_MANAGEMENT.MODE_DETAIL}?id=${record.id}`,
                  {
                    state: {
                      id: "hahahah",
                      mode: TYPE_MANAGEMENT.MODE_CREATE,
                    },
                  }
                )
              }
            ></ButtonBase>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handlePageSizeChange = (value: number) => {
    setValue("size", value);
    // setLoadingTable(true);
    // ObjectsAPI.getObjects({size: getValues("size")}).then((result: any) => {
    //   if (result.data.data && result.data.data.data) {
    //     dispatch(SetObjects(result.data.data.data));
    //     setValue("current", result.data.data.currentPage);
    //     setValue("total", result.data.data.totalPages);
    //   }
    // }).finally(() => {
    //   setLoadingTable(false);
    // });
  };

  const handlePaginationChange = (page: number) => {
    setValue("current", page - 1);
    fetchData();
  };

  const fetchData = () => {
    // setLoadingTable(true);
    // ObjectsAPI.getObjects(getValues()).then((result: any) => {
    //   if (result.data.data && result.data.data.data) {
    //     dispatch(SetObjects(result.data.data.data));
    //     setValue("current", result.data.data.currentPage);
    //     setValue("total", result.data.data.totalPages);
    //   }
    // }).finally(() => {
    //   setLoadingTable(false);
    // });
  };

  const handlePageChange = (
    pagination: TablePaginationConfig,
    sorter: any,
    extra: any
  ) => {
    console.log(extra);
    // setValue("sortType", extra.order ? extra.order.slice(0, -3) : "");
    // setValue("sortField", extra.field);
    // fetchData();
  };

  return (
    <>
      <CardLayoutTemplate
        title={() => (
          <>
            <FontAwesomeBase className="mr-2" iconName={"filter"} />{" "}
            {t("titleSearch")}
          </>
        )}
        className="mb-10 mt-8 shadow-md"
      >
        <FormSearchTemplate
          footer={
            <>
              <ButtonBase category="clearForm"></ButtonBase>
              <ButtonBase
                category="search"
                onClick={() => console.log("search function")}
              >
                <FontAwesomeBase
                  className="mr-1"
                  iconName={"magnifying-glass"}
                />
                {t("common.formSearch.search")}
              </ButtonBase>
            </>
          }
        >
          <FormSearchChildTemplate label={t("demoCrud.table.name")}>
            <InputTextTemplate
              control={control}
              name="name"
            ></InputTextTemplate>
          </FormSearchChildTemplate>

          <FormSearchChildTemplate label={t("demoCrud.table.code")}>
            <InputTextTemplate
              control={control}
              name="code"
            ></InputTextTemplate>
          </FormSearchChildTemplate>
        </FormSearchTemplate>
      </CardLayoutTemplate>
      <TableTemplate
        title={() => (
          <>
            <FontAwesomeBase className="mr-2" iconName={"list"} />{" "}
            {t("titleTable")}
          </>
        )}
        active={
          <>
            <ButtonBase
              category="create"
              onClick={() =>
                navigate(
                  `${ROUTER_BASE.systemMenuManagement.path}`,
                  {
                    state: {
                      id: "hahahah",
                      mode: TYPE_MANAGEMENT.MODE_CREATE,
                    },
                  }
                )
              }
              className="mx-2 btn btn__header__table btn__create"
            ></ButtonBase>
          </>
        }
        onChange={handlePageChange}
        handlePageSizeChange={handlePageSizeChange}
        handlePaginationChange={handlePaginationChange}
        columns={columns}
        dataSource={data}
        loading={loading}
        paginationProp={{
          current: getValues("current"),
          size: getValues("size"),
          total: getValues("total"),
        }}
      ></TableTemplate>
    </>
  );
}

export default memo(Demo);
