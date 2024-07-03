import { useNavigate, useParams } from "react-router-dom";
import { useNotification } from "../../../components/notification-base/NotificationTemplate";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useGlobalLoading } from "../../../components/global-loading/GlobalLoading";
import { useModalProvider } from "../../../components/notification-base/ModalNotificationTemplate";
import { useForm } from "react-hook-form";
import { DemoRequest } from "../../../interface/demo/DemoRequest.interface";
import { ROUTER_BASE } from "../../../router/router.constant";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import CardLayoutTemplate from "../../../components/layout-base/CardLayoutTemplate";
import { TYPE_MANAGEMENT } from "../../../interface/constants/type/Type.const";
import FormTemplate from "../../../components/form-base/form-basic-base/FormTemplate";
import FormChildTemplate from "../../../components/form-base/form-basic-base/FormChildTemplate";
import InputTextTemplate from "../../../components/input-form/InputTextTemplate";
import FormFooterTemplate from "../../../components/form-base/form-basic-base/FormFooterTemplate";
import ButtonBase from "../../../components/button-base/ButtonBase";

function DemoManagement() {
  const navigate = useNavigate();
  const { mode, id } = useParams();
  const { t } = useTranslation();
  const { openNotification } = useNotification();
//   const codeMngData = useAppSelector(GetCodeMng);
  const dispatch = useAppDispatch();
  const { setLoading } = useGlobalLoading();
  const { openModal } = useModalProvider();

  const { control, getValues, watch, reset } = useForm<DemoRequest>({
    defaultValues: {
      id: "",
      name: "",
      code: "",
    },
  });
  const nameWatch = watch("name");
  const codeWatch = watch("code");

  const back = () => {
    navigate(ROUTER_BASE.demo.path);
  };

  const onCreate = () => {
    openModal(
      "confirm",
      t("common.confirm.title"),
      t("demo.confirmCreate"),
      () => {
        // setLoading(true);
        // ObjectsAPI.addObject(getValues())
        //   .then((response) => {
        //     if (
        //       response.status &&
        //       response.status === TYPE_MANAGEMENT.STATUS_SUCCESS
        //     ) {
        //       openNotification(
        //         "success",
        //         t("common.notification.success"),
        //         t("demo.createSuccess")
        //       );
        //       back();
        //     }
        //   })
        //   .catch((error) => {
        //     if (
        //       error.response &&
        //       error.response.status === TYPE_MANAGEMENT.STATUS_ERROR_400
        //     ) {
        //       if (
        //         error.response.data &&
        //         error.response.data.status === TYPE_MANAGEMENT.STATUS_ERROR_400
        //       ) {
        //         openNotification(
        //           "error",
        //           t("common.notification.error"),
        //           error.response.data
        //         );
        //       }
        //     }
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //   });
      }
    );
  };

  const onUpdate = () => {
    openModal(
      "confirm",
      t("common.confirm.title"),
      t("demo.confirmUpdate"),
      () => {
        // setLoading(true);
        // ObjectsAPI.updateObject(getValues())
        //   .then((response) => {
        //     if (
        //       response.status &&
        //       response.status === TYPE_MANAGEMENT.STATUS_SUCCESS
        //     ) {
        //       openNotification(
        //         "success",
        //         t("common.notification.success"),
        //         t("demo.updateSuccess")
        //       );
        //       back();
        //     }
        //   })
        //   .catch((error) => {
        //     if (
        //       error.response &&
        //       error.response.status === TYPE_MANAGEMENT.STATUS_ERROR_400
        //     ) {
        //       if (
        //         error.response.data &&
        //         error.response.data.status === TYPE_MANAGEMENT.STATUS_ERROR_400
        //       ) {
        //         openNotification(
        //           "error",
        //           t("common.notification.error"),
        //           error.response.data
        //         );
        //       }
        //     }
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //   });
      }
    );
  };

  const onDelete = () => {
    openModal(
      "confirm",
      t("common.confirm.title"),
      t("demo.confirmDelete"),
      () => {
        // setLoading(true);
        // ObjectsAPI.getObjectDelete(getValues("id"))
        //   .then((response) => {
        //     if (
        //       response.status &&
        //       response.status === TYPE_MANAGEMENT.STATUS_SUCCESS
        //     ) {
        //       openNotification(
        //         "success",
        //         t("common.notification.success"),
        //         t("demo.deleteSuccess")
        //       );
        //       back();
        //     }
        //   })
        //   .catch((error) => {
        //     if (
        //       error.response &&
        //       error.response.status === TYPE_MANAGEMENT.STATUS_ERROR_400
        //     ) {
        //       if (
        //         error.response.data &&
        //         error.response.data.status === TYPE_MANAGEMENT.STATUS_ERROR_400
        //       ) {
        //         openNotification(
        //           "error",
        //           t("common.notification.error"),
        //           error.response.data
        //         );
        //       }
        //     }
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //   });
      }
    );
  };

  useEffect(() => {
    // setLoading(true);
    // CodeMngApi.getCodeMng("OBJECT_TYPE").then((res) => {
    //   dispatch(SetCodeMng(res.data.data));
    // });
    // if (mode !== TYPE_MANAGEMENT.MODE_CREATE && id && id !== "0") {
    //   ObjectsAPI.getMenuSelect(id).then((res) => {
    //     dispatch(
    //       SetMenuParent(
    //         res.data.data.map((el: any) => {
    //           return {
    //             value: el.id,
    //             label: `${el.code} - ${t(el.name)}`,
    //           };
    //         })
    //       )
    //     );
    //   });

    //   ObjectsAPI.getObjectDetail(id)
    //     .then((res) => {
    //       reset(res.data.data);
    //     })
    //     .catch((error) => {
    //       if (
    //         error.response &&
    //         error.response.status === TYPE_MANAGEMENT.STATUS_ERROR_400
    //       ) {
    //         if (
    //           error.response.data &&
    //           error.response.data.status === TYPE_MANAGEMENT.STATUS_ERROR_404
    //         ) {
    //           openModal(
    //             "error",
    //             t("common.notification.error"),
    //             t("demo.error.notFound"),
    //             () => {
    //               back();
    //             }
    //           );
    //         }
    //       }
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // } else {
    //   ObjectsAPI.getMenuCreateSelect().then((res) => {
    //     dispatch(
    //       SetMenuParent(
    //         res.data.data.map((el: any) => {
    //           return {
    //             value: el.id,
    //             label: `${el.code} - ${t(el.name)}`,
    //           };
    //         })
    //       )
    //     );
    //   });
    // }
    // setLoading(false);
  }, []);

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => {
    return (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  };

  return (
    <>
      <CardLayoutTemplate
        className="mb-10 mt-8 shadow-md"
        title={
          mode === TYPE_MANAGEMENT.MODE_CREATE
            ? t("demo.titleCreate")
            : mode === TYPE_MANAGEMENT.MODE_UPDATE
            ? t("demo.titleUpdate")
            : t("demo.titleDetail")
        }
      >
        {/* form crud */}
        <FormTemplate contentSize={"70"} labelSize={"30"}>
          {/* content form crud */}
          <FormChildTemplate
            title={t("demo.fieldName.code")}
            required={true}
          >
            <InputTextTemplate mode={mode} name="code" control={control} />
          </FormChildTemplate>

          <FormChildTemplate
            title={t("demo.fieldName.name")}
            required={true}
          >
            <InputTextTemplate mode={mode} name="name" control={control} />
          </FormChildTemplate>

          <FormFooterTemplate>
            {mode === TYPE_MANAGEMENT.MODE_CREATE ? (
              <ButtonBase
                category="create"
                className="mx-2"
                onClick={() => onCreate()}
              ></ButtonBase>
            ) : mode === TYPE_MANAGEMENT.MODE_DETAIL ? (
              <ButtonBase
                category="goUpdate"
                onClick={() =>
                  navigate(
                    `${ROUTER_BASE.demo.path}/${TYPE_MANAGEMENT.MODE_UPDATE}?id=${id}`
                  )
                }
                className="mx-2"
              ></ButtonBase>
            ) : (
              <>
                {" "}
                <ButtonBase
                    category="update"
                  className="mx-2"
                  onClick={() => onUpdate()}
                ></ButtonBase>
                <ButtonBase
                    category="remove"
                  className="mx-2"
                  onClick={() => onDelete()}
                >
                </ButtonBase>
              </>
            )}
            <ButtonBase category="back" className="mx-2 btn btn__back" onClick={() => back()}></ButtonBase>
          </FormFooterTemplate>
        </FormTemplate>
      </CardLayoutTemplate>
    </>
  );
}

export default memo(DemoManagement);
