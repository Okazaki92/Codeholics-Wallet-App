import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import { Box, Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import transactionsOperations from "../../redux/transactions/transactionOperations";

export const TransactionPagination = () => {
  const pageSize = 4;
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({
    page: 1,
    count: 0,
  });
  useEffect(() => {
    if (pagination.count === 0) {
      dispatch(
        transactionsOperations.getTransactions({ page: pagination.page })
      ).then((data) => {
        console.log(data);
        setPagination({ ...pagination, count: data.payload.total });
      });
    }
  }, [dispatch, pagination]);

  const handlePageChange = (event, page) => {
    const nextPage = page;
    console.log(page);

    const newPageCount = Math.ceil(pagination.count / pageSize);

    if (nextPage >= 1 && nextPage <= newPageCount) {
      setPagination({ ...pagination, page: nextPage });
      dispatch(transactionsOperations.getTransactions({ page: nextPage }));
    }
  };

  return (
    <Box className={styles["pagination-container"]}>
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
};
