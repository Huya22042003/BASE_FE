import { memo, useEffect, useState } from "react";
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
import { MenuMngApi } from "../../../service/systemManagenment/menuMng/menuMng.service";
import { AdMenuMngResDto } from "../../../service/systemManagenment/menuMng/menuMng.type";
import { useGlobalLoading } from "../../../components/global-loading/GlobalLoading";

function MenuMng() {
  // start variable
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loading = useGlobalLoading();

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

  const [data, setData] = useState<AdMenuMngResDto[]>([])

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
      title: t("systemMenu.table.name"),
      dataIndex: "name",
      key: "name",
      sorter: true,
      showSorterTooltip: false,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("systemMenu.table.parent"),
      dataIndex: "parent",
      key: "parent",
      sorter: true,
      showSorterTooltip: false,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("systemMenu.table.module"),
      dataIndex: "module",
      key: "module",
      sorter: true,
      showSorterTooltip: false,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("systemMenu.table.url"),
      dataIndex: "url",
      key: "url",
      sorter: true,
      showSorterTooltip: false,
      sortDirections: ["descend", "ascend"],
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
                  `${ROUTER_BASE.systemMenuManagement.path}`,
                  {
                    state: {
                      id: record.id,
                      mode: TYPE_MANAGEMENT.MODE_UPDATE,
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
  // end variable

  // start setup data
  useEffect(() => {
    fetchData();
  }, [])
  // end setup data

  // start method
  const handlePageSizeChange = (value: number) => {
    setValue("size", value);
    loading.setLoading(true);
    MenuMngApi.getPageMenu({size: getValues("size")}).then((result: any) => {
      if (result.data.data && result.data.data.data) {
        setData(result.data.data.data)
        setValue("current", result.data.data.currentPage);
        setValue("total", result.data.data.totalPages);
      }
    }).finally(() => {
      loading.setLoading(false);
    });
  };

  const handlePaginationChange = (page: number) => {
    setValue("current", page - 1);
    fetchData();
  };

  const fetchData = () => {
    loading.setLoading(true);
    MenuMngApi.getPageMenu(getValues()).then((result: any) => {
      if (result.data.data && result.data.data.data) {
        setData(result.data.data.data)
        setValue("current", result.data.data.currentPage);
        setValue("total", result.data.data.totalPages);
      }
    }).finally(() => {
      loading.setLoading(false);
    });
  };

  const handlePageChange = (
    pagination: TablePaginationConfig,
    sorter: any,
    extra: any
  ) => {
    console.log(extra);
    setValue("sortType", extra.order ? extra.order.slice(0, -3) : "");
    setValue("sortField", extra.field);
    fetchData();
  };
  // end method

  return (
    <>
      <CardLayoutTemplate
        title={() => (
          <>
            <FontAwesomeBase className="mr-2" iconName={"filter"} />{" "}
            <span className="title__search">{t("titleSearch")}</span>
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
                onClick={() => fetchData()}
              ></ButtonBase>
            </>
          }
        >
          <FormSearchChildTemplate label={t("systemMenu.table.name")}>
            <InputTextTemplate
              control={control}
              name="name"
            ></InputTextTemplate>
          </FormSearchChildTemplate>

          <FormSearchChildTemplate label={t("systemMenu.table.module")}>
            <InputTextTemplate
              control={control}
              name="module"
            ></InputTextTemplate>
          </FormSearchChildTemplate>

          <FormSearchChildTemplate label={t("systemMenu.table.url")}>
            <InputTextTemplate
              control={control}
              name="url"
            ></InputTextTemplate>
          </FormSearchChildTemplate>
          
        </FormSearchTemplate>
      </CardLayoutTemplate>
      <TableTemplate
        title={() => (
          <>
            <FontAwesomeBase className="mr-2" iconName={"list"} />
            <span className="title__table">{t("titleTable")}</span>
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
        paginationProp={{
          current: getValues("current"),
          size: getValues("size"),
          total: getValues("total"),
        }}
      ></TableTemplate>
    </>
  );
}

export default memo(MenuMng);
