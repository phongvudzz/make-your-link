"use client";
import { demoData } from "@/data/constant";
import { DataProps, ExtraLink } from "@/types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const initialState: DataProps = {
  name: "",
  description: "",
  image: "",
  background: "",
  facebook: "",
  twitter: "",
  instagram: "",
  github: "",
  telegram: "",
  linkedin: "",
  email: "",
  whatsapp: "",
  youtube: "",
  extraLinks: [],
};

interface DataContextType {
  myLink: DataProps;
  setMyLink: (myLink: DataProps) => void;
  updateProfileInfo: (name: keyof DataProps, value: string) => void;
  updateExtraLinks: (extraLink: ExtraLink[]) => void;
  addNewExtraLink: (extraLink: ExtraLink) => void;
  showDemoData: () => void;
  isEmpty: boolean;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [myLink, setMyLink] = useState<DataProps>(initialState);

  const updateProfileInfo = useCallback(
    (name: keyof DataProps, value: string) => {
      setMyLink((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const updateExtraLinks = useCallback((extraLink: ExtraLink[]) => {
    setMyLink((prevState) => ({
      ...prevState,
      extraLinks: extraLink,
    }));
  }, []);

  const addNewExtraLink = useCallback((extraLink: ExtraLink) => {
    setMyLink((prevState) => ({
      ...prevState,
      extraLinks: [...(prevState?.extraLinks || []), extraLink],
    }));
  }, []);

  const showDemoData = useCallback(() => {
    setMyLink(demoData);
  }, []);

  const isEmpty = useMemo(
    () => Object.values(myLink).every((value) => !value || value.length === 0),
    [myLink]
  );

  return (
    <DataContext.Provider
      value={{
        myLink,
        setMyLink,
        updateProfileInfo,
        updateExtraLinks,
        addNewExtraLink,
        showDemoData,
        isEmpty,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
